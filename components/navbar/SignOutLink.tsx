'use client';
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner';

function SignOutLink() {
  const handleLogout = () =>{
    toast('Sign Out...')
  }
  return (
    <SignOutButton >
      <Link href={'/'} className='w-full text-left' onClick={handleLogout}>
        Sign Out
      </Link>
    </SignOutButton>
  )
}

export default SignOutLink