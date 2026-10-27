// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Uses the Fake Store API and logs each product's title, price, and image URL.
// Run in a browser console or a Node.js version with global fetch support.

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const products = await response.json();

        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("------------------------------");
        });

        // Optional browser bonus: dynamically create product cards.
        if (typeof document !== "undefined") {
            let container = document.getElementById("products-container");

            if (!container) {
                container = document.createElement("div");
                container.id = "products-container";
                document.body.appendChild(container);
            }

            products.forEach(product => {
                const card = document.createElement("article");
                const title = document.createElement("h3");
                const price = document.createElement("p");
                const image = document.createElement("img");

                title.textContent = product.title;
                price.textContent = `$${product.price}`;
                image.src = product.image;
                image.alt = product.title;
                image.width = 120;

                card.append(title, price, image);
                container.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

fetchAndDisplayProducts();
