import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TodoList from '@/features/TodoList/TodoList';

export default function Todos() {
  return (
    <>
      <Head>
        <title>Todos</title>
        <meta name="description" content="Todos page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box>
          <TodoList />
        </Box>
      </main>
    </>
  );
}
