'use client';

import Image from 'next/image';
import styles from './page.module.css';
// import { SideNav } from '@/components/dashboard/SideNav';
import { Layout } from '@/components/dashboard/layout';
import { useState } from 'react';

export default function Home() {
  const [openNav, setOpenNav] = useState(true);

  const handleSetOpenNav = () => {
    setOpenNav(false);
  }

  return (
    <main>
      <div>
        <Layout></Layout>
      </div>
    </main>
  )
}
