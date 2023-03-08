---
title: 'Why & how to code a blog'
date: 'Mar 1, 2023'
description: 'An overview of why blogs are still relevant in 2023 and how I coded a blog using NextJS.'
coverimage: '/Images/blog/thumbnail.png'
---

# Why you should make a blog
With the rise of social media networks it is easy to dismiss blogs as a dying industry.

<img src="\Images\blog\trends.png" alt="trends" style="width: 100%;">

Especially when you have social media networks easily allowing people to post their opinions and spread their posts through complex algorithms.

<img src="\Images\blog\threads.png" alt="trends" style="width: 100%;">

The problem with social media networks is that they place ads throughout their feed to make money and sharing none of that money to the users that create the content for their networks. Instead coding your own blog allows you to have more control of things like ads and revenue.

<img src="\Images\blog\ads.png" alt="trends" style="width: 100%;">

There are countless popular blogs today some which make hundreds of thousands to milllions a month such as billboard, techcrunch and wired just to name a few. These blogs run ads on their site and share the link to new articles on social media networks in order for people to discover it.

<img src="\Images\blog\billboard.png" alt="trends" style="width: 33.33333%;"><img src="\Images\blog\techcrunch.png" alt="trends" style="width: 33.33333%;"><img src="\Images\blog\wired.png" alt="trends" style="width: 33.33333%;">

# How to make a blog
## NextJS
This code will be made using typescript NextJS so start by initalising the project in the terminal. 
``` plaintext
npx create-next-app blog
cd blog
npm run dev
```
<img src="\Images\blog\Screenshots\localhost_3000_.png" alt="trends" style="width: 100%;">

Add whatever styling you like, the styling I used can be found in the github source.

Then create a folder called components and create a file called Header.js

<img src="\Images\blog\Screenshots\headerjs.png" alt="trends" style="width: 100%;">

Then go to _app.tsx where you should see this

``` tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

Add the header component to the file by copying the following

``` tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
      <Component {...pageProps} />
    </>
  )
}

``` 

Add imports

``` tsx
import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
```

