# Portfolio Update Instructions

## Adding Your Project Images:

1. **Place your images in the `images/` folder** with these names:
   - `project1.jpg` (or .png, .webp)
   - `project2.jpg`
   - `project3.jpg`
   - `project4.jpg`
   - `project5.jpg`

2. **Update the HTML file** - Replace the placeholder image URLs in `index.html`:

   Change this:
   ```html
   <img src="https://via.placeholder.com/600x400/333333/ffffff?text=Project+1" alt="Project 1">
   ```
   
   To this:
   ```html
   <img src="images/project1.jpg" alt="Project 1">
   ```

## Adding Your Project Text:

Replace the placeholder text in each project section:

1. **Project 1** (Ecommerce Website Design):
   - Update the `<h2>` title
   - Replace the `<p>` paragraphs with your actual project description

2. **Project 2** (Marketing Campaign):
   - Update the `<h2>` title  
   - Replace the `<p>` paragraphs with your actual project description

3. **Continue for all 5 projects...**

## Example of a complete project section:

```html
<section class="project-section">
    <div class="project-container">
        <div class="project-image">
            <img src="images/project1.jpg" alt="Ecommerce Website">
        </div>
        <div class="project-description">
            <h2>Your Actual Project Title</h2>
            <p>Your actual project description goes here. Describe what the project was about, what you did, and what the results were.</p>
            <p>You can add multiple paragraphs to provide more detail about your work.</p>
        </div>
    </div>
</section>
```

## File Structure:
```
resume port new/
├── index.html
├── styles.css
├── images/
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   └── project5.jpg
└── README.md
```

