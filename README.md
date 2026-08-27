# LusterPicture official site

Official website for **LusterPicture**, hosted with GitHub Pages at `https://luster-picture.com`.

## Included

- Japanese and English landing pages
- Privacy Policy, Terms of Use, and Support pages
- `app-ads.txt` for Google AdMob
- Custom-domain configuration through `CNAME`
- Pages CMS configuration in `.pages.yml`
- Responsive layout, accessible navigation, SEO metadata, `robots.txt`, and sitemap

## GitHub Pages setup

1. Open **Settings > Pages** in this repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then save.
4. In **Custom domain**, enter `luster-picture.com`.
5. Configure the domain's DNS records as described below.
6. When the certificate is ready, enable **Enforce HTTPS**.

## DNS records

At the domain registrar, configure the apex domain with GitHub Pages' four `A` records:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

For `www`, add:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | www | plapla360.github.io |

DNS values should be checked against GitHub's current documentation before changes are made.

## Pages CMS

1. Visit `https://app.pagescms.org/` and sign in with GitHub.
2. Authorize access to this repository.
3. Select `plapla360/luster-picture-site`.
4. Edit the home pages, privacy policies, or support pages and publish.

The CMS writes changes back to this repository; GitHub Pages then rebuilds the site automatically.

## AdMob check

After deployment, confirm that this URL returns a single plain-text record:

`https://luster-picture.com/app-ads.txt`

Expected record:

`google.com, pub-9271315682346740, DIRECT, f08c47fec0942fa0`
