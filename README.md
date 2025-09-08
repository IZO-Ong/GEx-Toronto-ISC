# GEx Toronto 2025 ISC submission

A single-article news feature built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
This project was created to showcase a long-form article with responsive typography, a sidebar image gallery, and a lightbox viewer.

## 📸 Screenshots

### Desktop Layout
![Desktop Screenshot](public/images/screenshot-desktop.png)

### Mobile Layout
![Mobile Screenshot](public/images/screenshot-mobile.png)

---

## 🚀 Features

- **Next.js App Router** with `app/` directory
- **Sidebar gallery** with image lightbox
- **Deployed on Vercel**

---

## 📂 Project Structure

```
app/
 ├─ layout.tsx        # Root layout (header, footer, metadata)
 ├─ page.tsx          # Main article page
 ├─ globals.css       # Global styles
components/
 ├─ Lightbox.tsx      # Image modal viewer
 ├─ SidebarGallery.tsx # Thumbnail grid for images
 ├─ SidebarSection.tsx # Sidebar content section
public/
 ├─ images/           # Static images
```

---

## ⚡ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 🌐 Deployment

This project is deployed with [Vercel](https://vercel.com/).

Every push to the `main` branch triggers an automatic rebuild and redeploy.  
You can also deploy manually via CLI:

```bash
npm install -g vercel
vercel
```

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) – React framework
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- [Vercel](https://vercel.com/) – Deployment platform

---

## 📄 License

This project is licensed under the MIT License.  
Feel free to use it.

---

## ✨ Credits

Created by **Isaac Ong**.
Special thanks to the Toronto GEx 2025 cohort.
