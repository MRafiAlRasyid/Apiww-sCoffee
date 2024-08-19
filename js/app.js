document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'ESSPRESO', img: '1.jpg', price: 20000, des: 'Minuman kopi murni yang kaya dan penuh aroma, disajikan dalam cangkir kecil. Esspreso adalah dasar dari banyak minuman lainnya.'},
            { id: 2, name: 'MACCHIATO', img: '2.jpg', price: 30000, des: 'Espresso dengan sedikit buih susu di atasnya. Versi lainnya adalah Caramel Macchiato, yang ditambahkan sirup karamel dan susu panas.'},
            { id: 3, name: 'MATCHA', img: '3.jpg', price: 35000, des: 'Minuman non-kopi yang terbuat dari bubuk teh hijau matcha, susu, dan sedikit pemanis. Sehat dan menyegarkan.'},
            { id: 4, name: 'AFFOGATO', img: '4.jpg', price: 40000, des: 'Sajian unik yang menggabungkan espresso panas dengan es krim vanila. Nikmati perpaduan panas dan dingin yang sempurna dalam satu sajian.'},
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // Cek apakah ada barang yang sama
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // Jika belum ada / cart masih kosong
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                this.items = this.items.map((item) => {
                    if(item.id !== newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += newItem.price;
                        return item;
                    }
                });
            }

            console.log(this.items);
        },

        remove(id) {
            // ambil item yang mau di hapus itemnya
            const cartItem = this.items.find((item) => item.id === id);

            if (cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});

// Konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}