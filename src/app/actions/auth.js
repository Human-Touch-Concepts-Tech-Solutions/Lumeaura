'use server';

import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { SignJWT, importJWK } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SECRET_KEY = process.env.JWT_SECRET || 'a_very_long_random_string_for_dev';
const key = new TextEncoder().encode(SECRET_KEY);

export async function loginAction(formData) {
  const username = formData.get('username');
  const password = formData.get('password');

  try {
    // 1. Fetch admin from Vercel Postgres
    const { rows } = await sql`SELECT * FROM admins WHERE username = ${username}`;
    const admin = rows[0];

    if (!admin) {
      return { error: 'Invalid credentials' };
    }

    // 2. Verify Password
    const isPasswordCorrect = await bcrypt.compare(password, admin.password_hash);

    if (!isPasswordCorrect) {
      return { error: 'Invalid credentials' };
    }

    // 3. Create Encrypted Session Token
    const token = await new SignJWT({ userId: admin.id, role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(key);

    // 4. Set Secure Cookie
    const cookieStore = await cookies();
    cookieStore.set('admin_session', token, {
      httpOnly: true, // Prevents JavaScript from reading the cookie (anti-XSS)
      secure: process.env.NODE_ENV === 'production', // Only over HTTPS
      sameSite: 'strict', // Prevents CSRF attacks
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

  } catch (error) {
    console.error('Login error:', error);
    return { error: 'Something went wrong. Please try again.' };
  }

  // Redirect to dashboard on success
  redirect('/admin/dashboard');
}