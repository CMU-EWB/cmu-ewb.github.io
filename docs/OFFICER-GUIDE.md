# Officer guide: updating the chapter website

This guide is for current and future officers. You don't need to write code to update the site.

## How it works in one minute

- The website lives in a GitHub repository owned by the club's GitHub **organization**, not by any one student.
- GitHub Pages hosts it for free. Every saved change goes live on its own in about 1–2 minutes.
- You edit text and photos in **Pages CMS**, a free editing panel that works a lot like Wix or Google Sites forms.

## First-time setup (each new officer, about 5 minutes)

1. Create a free GitHub account at github.com, if you don't have one.
2. Ask a current owner of the club's GitHub organization to invite you. They go to the organization's **People** tab and click **Invite member**. Accept the invitation email.
3. Go to **app.pagescms.org** and click **Sign in with GitHub**.
4. The first time you sign in, Pages CMS asks you to install its GitHub app. Choose the club's organization and the website repository.
5. Open the website repository in Pages CMS. The sections are listed on the left.

## What you can edit

| Section in the panel | What it changes |
|---|---|
| **Events** | Meetings, workshops, trips. Add a date, and past events move to "Past events" on their own. |
| **Projects** | Project cards and project pages. Use **Display order** to choose which three show on the home page (1, 2, 3). |
| **Officers** | One entry per officer, with a name, position, headshot and short bio. |
| **Home page** | The big headline, intro text, optional background photo and the three highlight boxes. |
| **About page** | Mission, history, faculty advisor. |
| **Join page (FAQ)** | Questions and answers on the Join page. |
| **Site settings** | Chapter name, school, club email, meeting day and room, interest-form link, social links, donation link. These show up all over the site. |

Click **Save** when you're done. Your change is live in 1–2 minutes. Refresh the site to check it.

## Photos

- Upload photos through any image field, or in the **Media** section.
- Keep each photo under about 2 MB. Phone photos are often 5 MB or more, so shrink them first. Any free "compress JPG" website works.
- Headshots look best square. Project photos look best wide (landscape).
- Only post photos of people who agreed to be on the website. For community partners, follow EWB-USA's photo consent guidelines.

## End-of-year handoff checklist

- [ ] Add the incoming officers to the GitHub organization. Make at least **two** of them **Owners**.
- [ ] Update the **Officers** section: delete entries for graduating officers and add the new ones.
- [ ] Update **Site settings** with the new meeting time and room, and check the club email still works.
- [ ] Remove graduating officers from the organization, or change them to members.
- [ ] Pass this guide on, and keep the organization owner list current. If every owner leaves, nobody can manage the site.

## If something looks wrong

- **My change didn't show up.** Wait 2 minutes and do a hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac).
- **The site stopped updating.** In GitHub, open the repository and click the **Actions** tab. A red ✗ means the last change broke the build. Usually it's a typo in a date. Open the last thing you edited in Pages CMS and fix it, or undo it.
- **I deleted something by accident.** Every change is saved in GitHub's history. Ask an Owner, or anyone comfortable with GitHub, to restore the file from the repository's **History** view.

## For the technical folks

- Built with Jekyll (the version GitHub Pages runs). Layouts live in `_layouts/`, `_includes/`, and the styles are in `assets/css/main.css`. Change the colors at the top of that file.
- Content: `_events/`, `_projects/`, `_officers/` (Markdown), `_data/settings.yml`, `_data/home.yml`, `about.md` and `join.md`.
- The editing panel's setup is in `.pages.yml`.
- To preview on your own computer: `bundle install`, then `bundle exec jekyll serve`, then open http://localhost:4000.
