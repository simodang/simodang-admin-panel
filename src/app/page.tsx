'use client';

import Image from 'next/image';
import styles from './page.module.css';
// import { SideNav } from '@/components/dashboard/SideNav';
import { Layout } from '@/components/dashboard/layout';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardActions,Typography } from '@mui/material';
import { api } from '@/hooks/hooks-api';

export default function Home() {
  const [user, setUser] = useState(0);
  const [device, setDevice] = useState(0);
  const [article, setArticle] = useState(0);
  const [master, setMaster] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setUser((await api.get('/users')).data.length);
      setMaster((await api.get('/masters')).data.length);
      setDevice((await api.get('/devices')).data.length);
      setArticle((await api.get('/articles')).data.length);
    }
    fetchData();
  });

  return (
    <main>
      <div>
        <Layout>
        </Layout>
        <div>
          <Card sx={{width: 200, height: 200, margin:'20px', display:'flex', flexDirection:'column'}} variant='outlined'>
            <CardContent>
              <Typography variant="h3">
                User
              </Typography>
              <Typography sx={{margin:'30px'}} className='spacing'>
              </Typography>
              <Typography variant='h4'>
                {user}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{width: 200, height: 200, margin:'20px', display:'flex', flexDirection:'column'}} variant='outlined'>
            <CardContent>
              <Typography variant="h3">
                Device
              </Typography>
              <Typography sx={{margin:'30px'}} className='spacing'>
              </Typography>
              <Typography variant='h4'>
                {device}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{width: 200, height: 200, margin:'20px', display:'flex', flexDirection:'column'}} variant='outlined'>
            <CardContent>
              <Typography variant="h3">
                Master
              </Typography>
              <Typography sx={{margin:'30px'}} className='spacing'>
              </Typography>
              <Typography variant='h4'>
                {master}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{width: 200, height: 200, margin:'20px', display:'flex', flexDirection:'column'}} variant='outlined'>
            <CardContent>
              <Typography variant="h3">
                Article
              </Typography>
              <Typography sx={{margin:'30px'}} className='spacing'>
              </Typography>
              <Typography variant='h4'>
                {article}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
