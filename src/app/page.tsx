'use client';

import Image from 'next/image';
import styles from './page.module.css';
// import { SideNav } from '@/components/dashboard/SideNav';
import { Layout } from '@/components/dashboard/layout';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { api } from '@/hooks/hooks-api';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState(0);
  const [device, setDevice] = useState(0);
  const [article, setArticle] = useState(0);
  const [master, setMaster] = useState(0);
  // const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setUser((await axios.get('http://devel-filkomub.site/admin/users', {
        headers: {
          Authorization: `Bearer ${localStorage['token']}`
        }
      })).data.length);
      setMaster((await axios.get('http://devel-filkomub.site/admin/masters', {
        headers: {
          Authorization: `Bearer ${localStorage['token']}`
        }
      })).data.length);
      setDevice((await axios.get('http://devel-filkomub.site/admin/devices', {
        headers: {
          Authorization: `Bearer ${localStorage['token']}`
        }
      })).data.length);
      setArticle((await axios.get('http://devel-filkomub.site/admin/articles', {
        headers: {
          Authorization: `Bearer ${localStorage['token']}`
        }
      })).data.length);
    }
    fetchData();
  });

  return (
    <main>
      <div>
        {
          localStorage['token'] !== null || localStorage['token'] !== undefined ? (
            <div>
              <Layout>
              </Layout>
              <div>
                <Card sx={{ width: 200, height: 200, margin: '20px', display: 'flex', flexDirection: 'column' }} variant='outlined'>
                  <CardContent>
                    <Typography variant="h3">
                      User
                    </Typography>
                    <Typography sx={{ margin: '30px' }} className='spacing'>
                    </Typography>
                    <Typography variant='h4'>
                      {user}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 200, height: 200, margin: '20px', display: 'flex', flexDirection: 'column' }} variant='outlined'>
                  <CardContent>
                    <Typography variant="h3">
                      Device
                    </Typography>
                    <Typography sx={{ margin: '30px' }} className='spacing'>
                    </Typography>
                    <Typography variant='h4'>
                      {device}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 200, height: 200, margin: '20px', display: 'flex', flexDirection: 'column' }} variant='outlined'>
                  <CardContent>
                    <Typography variant="h3">
                      Master
                    </Typography>
                    <Typography sx={{ margin: '30px' }} className='spacing'>
                    </Typography>
                    <Typography variant='h4'>
                      {master}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 200, height: 200, margin: '20px', display: 'flex', flexDirection: 'column' }} variant='outlined'>
                  <CardContent>
                    <Typography variant="h3">
                      Article
                    </Typography>
                    <Typography sx={{ margin: '30px' }} className='spacing'>
                    </Typography>
                    <Typography variant='h4'>
                      {article}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            redirect('/auth/login')
          )
        }
      </div>
    </main>
  )
}
