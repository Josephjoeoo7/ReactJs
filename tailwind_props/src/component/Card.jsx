import React from 'react'

export default function Card({username,id="0"}) {
  return (
    <>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512"/>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
        <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
        </p>
        </blockquote>
        <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
        {username}
        </div>
        <div class="text-slate-700 dark:text-slate-500">
        ID : {id}
        </div>
        </figcaption>
        </div>
        </figure>
    </>
  )
}
