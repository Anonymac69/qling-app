import Head from 'next/head'

export const Header = ({ title }) => {
  return (
    <div>
      <Head>
        <title> {title} | Qingly</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,700&display=swap" rel="stylesheet"></link>      </Head>
    </div>
  )
}
