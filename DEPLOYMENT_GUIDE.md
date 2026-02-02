# 🚀 cPanel Deployment Guide for Vite React Project

## ✅ Your Project is Ready for cPanel!

---

## 📦 Step 1: Build Your Project (Already Done!)

```bash
npm run build
```

Build folder: **`dist`** (not `build`)

---

## 📤 Step 2: Upload to cPanel

### What to Upload:

1. Go to **cPanel → File Manager → public_html**

2. Upload **ALL files and folders** from `dist` folder:

```
✅ index.html
✅ assets/ (folder with all files inside)
✅ favicon.ico
✅ logo.png
✅ placeholder.svg
✅ robots.txt
✅ .htaccess (IMPORTANT!)
```

### ❌ DO NOT Upload:

```
❌ dist folder itself
❌ src folder
❌ node_modules
❌ package.json
❌ Any other source files
```

---

## 📁 Correct Structure in public_html:

```
public_html/
├── index.html
├── .htaccess
├── favicon.ico
├── logo.png
├── placeholder.svg
├── robots.txt
└── assets/
    ├── index-CEijbKZO.css
    ├── index-g-cadrv_.js
    └── logo-BppP5l2j.png
```

---

## 🔧 Step 3: Verify .htaccess File

Make sure `.htaccess` exists in `public_html` with this content:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

**This is CRITICAL for React Router to work!**

---

## 🌐 Step 4: Test Your Website

1. Visit your domain: `https://yourdomain.com`
2. Open Browser Console (F12)
3. Check for any errors

---

## 🐛 Common Issues & Fixes

### Issue 1: Blank Page / White Screen

**Fix:**
- Make sure `.htaccess` is uploaded
- Check file permissions (644 for files, 755 for folders)
- Clear browser cache

### Issue 2: 404 Errors on Refresh

**Fix:**
- `.htaccess` file must be in `public_html` root
- Check if mod_rewrite is enabled on your server

### Issue 3: Assets Not Loading

**Fix:**
- Verify `assets` folder is uploaded completely
- Check file paths in browser console
- Make sure all files have correct permissions

### Issue 4: API Calls Not Working

**Fix:**
- Update API URLs from `localhost` to your production domain
- Rebuild: `npm run build`
- Upload again

---

## 📝 Quick Checklist

- [ ] Built project: `npm run build`
- [ ] Uploaded all files from `dist` folder
- [ ] `.htaccess` file is in `public_html`
- [ ] Files directly in `public_html` (not in subfolder)
- [ ] Removed default `index.php` if exists
- [ ] Tested website in browser
- [ ] Checked browser console for errors

---

## 🎯 Your Build is Ready!

All files are in the `dist` folder. Just upload them to cPanel's `public_html` and you're done! 🎉

---

## 📞 Need Help?

If you see any errors:
1. Check browser console (F12)
2. Check cPanel error logs
3. Verify all files are uploaded correctly


