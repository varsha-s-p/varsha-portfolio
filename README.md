# FORGE Portfolio Template

This is the starter portfolio site for **Zephvion's FORGE apprenticeship
program**. It's the base every apprentice forks to build their own personal
portfolio site.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS. This is just the
default — see "Design & layout" below.

## How to fork

Don't use GitHub's regular "Fork" button. Instead, click **"Use this
template"** at the top of this repo's GitHub page, and create a new
repository under your own account. This gives you a clean repo with no
shared history back to this template.

## How to edit your content

Almost everything you need to change lives in one file:
[`data/profile.ts`](./data/profile.ts). Edit the fields there — name,
photo, role/track, apprentice ID, bio, cohort, skills, and contact
links — and the site updates automatically. You don't need to touch any
component code to get a working, personalized site.

## Design & layout

The starter design is intentionally minimal and black-and-white with no
Zephvion branding baked in. It's just a starting point — you're expected,
and encouraged, to fully restyle it. Change the layout, colors, fonts,
add pages, or rebuild the whole thing in Astro, Svelte, Bun, or any other
stack you prefer. The only requirement is the one below.

## The one non-negotiable rule

The footer component ([`components/Footer.tsx`](./components/Footer.tsx))
renders this line:

> Built under Zephvion's FORGE apprenticeship program, maintained by
> {name}, FORGE Apprentice.

**This line must remain on every version of your site, unedited**
(other than your name, which is pulled automatically from
`data/profile.ts`). This applies even if you rebuild the site in a
different stack — carry the line over verbatim.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deployment

1. Create an account (or sign in) at [vercel.com](https://vercel.com).
2. Import your forked GitHub repo as a new Vercel project.
3. Deploy — Vercel will auto-detect the Next.js app and build it with no
   extra configuration needed.

## Getting your subdomain

Once deployed, Vercel will give you a CNAME target for adding a custom
domain to your project. Do **not** set up the domain yourself — DNS for
`*.forge.zephvion.com` is managed centrally.

Instead:

1. Copy the CNAME target Vercel gives you (Project → Settings →
   Domains → Add → enter `your-name.forge.zephvion.com` → Vercel shows
   you the CNAME value to configure).
2. Send that CNAME value to **cto@zephvion.com** along with your name.
3. They'll add `your-name.forge.zephvion.com` to DNS, and it'll point at
   your deployment.
