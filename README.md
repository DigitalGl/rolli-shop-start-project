 
# Sushi Roll Shop

A simple web-based sushi roll shop simulation built with HTML, CSS, and JavaScript. Browse a catalog of rolls, adjust quantities, add items to your cart, and see the total cost—all with a responsive design powered by Bootstrap.

## Live Demo
Check out the live version here: [Sushi Roll Shop](https://digitalgl.github.io/Sushi-Roll-Shop/)

## Features
- 🍣 Catalog of sushi rolls with images, weights, and prices.
- ➕➖ Adjustable item quantities using plus/minus counters.
- 🛒 Add items to a dynamic shopping cart.
- 💰 Displays total cost with free delivery.
- 📱 Responsive layout using Bootstrap 4.

## How It Works
The app displays a list of sushi rolls. Users can increase/decrease the quantity of each roll and add them to the cart. The cart updates dynamically, showing selected items and the total price. A basic order form is included for submitting a phone number (functionality not implemented).

## Project Structure

```
Sushi-Roll-Shop/
├── index.html          # Main HTML file with catalog and cart
├── css/                # Folder for styles
│   └── main.css        # Custom styles for layout and design
├── js/                 # Folder for JavaScript
│   └── counter.js      # Logic for counters and cart functionality
├── img/                # Folder for images
│   ├── logo/           # Logo image (e.g., logo.svg)
│   └── roll/           # Roll images (e.g., philadelphia.jpg)
├── libs/               # External libraries
│   └── bootstrap/      # Bootstrap CSS (and optional JS)
│       ├── css/        # Bootstrap CSS files
│       └── js/         # Bootstrap JS files (not used)
├── jQuery/             # jQuery library (not used)
│   └── jquery-3.3.1.min.js  # jQuery 3.3.1 (optional)
└── README.md           # Project documentation
```

*Note:* Ensure the `img/logo/` folder contains `logo.svg` and `img/roll/` contains sushi roll images.

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/Sushi-Roll-Shop.git
   ```
2. **Navigate to the project folder:**
   ```bash
   cd Sushi-Roll-Shop
   ```
3. **Ensure images are present:**
   - Add `logo.svg` to `img/logo/`
   - Place sushi roll images (e.g., `philadelphia.jpg`) in `img/roll/`

4. **Open `index.html` in a browser:**
   - Double-click `index.html`
   - Or use a local server (e.g., Live Server in VS Code):
   ```bash
   live-server
   ```

## Deployment on GitHub Pages

To deploy on GitHub Pages:
1. Push the project to a GitHub repository.
2. Go to **Settings > Pages** in your repository.
3. Set the source to the **main** branch.
4. Access the site at: `https://username.github.io/Sushi-Roll-Shop/`

## Dependencies
- **Bootstrap 4** - For responsive design and styling (CSS only).
- *(Optional)* **jQuery 3.3.1** - Included but not used; remove if unnecessary.
- *(Optional)* **Bootstrap JS** - Included but not used; remove if unnecessary.

## Customization
- **Add Products:** Edit `index.html` to include more roll items in the catalog.
- **Styling:** Modify `css/main.css` to adjust colors, fonts, or layout.
- **Images:** Replace sushi roll images in `img/roll/` to update visuals.

## Notes
- The jQuery and Bootstrap JS files are included but not used. You can safely remove them unless adding advanced Bootstrap features (e.g., modals).
- The order form submission is **not implemented**; a backend is required to process it.

## Contributing
Fork this repository and submit pull requests with improvements! Suggestions for new features, better UX, or backend integration are welcome.

## License
This project is open-source and available under the **MIT License**.
