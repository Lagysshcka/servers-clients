import { Product } from "@/types/product";
import ProductList from "@/components/ProductList";

// Данные хранятся в серверном компоненте
const products: Product[] = [
  {
    id: 1,
    name: "Ноутбук ASUS ZenBook",
    price: 89990,
    description: "14″ OLED, Intel Core i7, 16GB RAM, 512GB SSD",
    image: "https://placehold.co/600x400/2563eb/white?text=ASUS+ZenBook",
    category: "Ноутбуки",
    inStock: true
  },
  {
    id: 2,
    name: "Смартфон iPhone 15",
    price: 79990,
    description: "6.1″ Super Retina XDR, A16 Bionic, 128GB",
    image: "https://placehold.co/600x400/2563eb/white?text=iPhone+15",
    category: "Смартфоны",
    inStock: true
  },
  {
    id: 3,
    name: "Наушники Sony WH-1000XM5",
    price: 29990,
    description: "Беспроводные, активное шумоподавление",
    image: "https://placehold.co/600x400/2563eb/white?text=Sony+WH-1000XM5",
    category: "Аудио",
    inStock: false
  },
  {
    id: 4,
    name: "Планшет iPad Air",
    price: 55990,
    description: "10.9″ Liquid Retina, M1, 64GB",
    image: "https://placehold.co/600x400/2563eb/white?text=iPad+Air",
    category: "Планшеты",
    inStock: true
  },
  {
    id: 5,
    name: "Монитор LG 27UL850",
    price: 34990,
    description: "27″ 4K IPS, USB-C, HDR10",
    image: "https://placehold.co/600x400/2563eb/white?text=LG+27UL850",
    category: "Мониторы",
    inStock: true
  },
  {
    id: 6,
    name: "Клавиатура Logitech MX Keys",
    price: 8990,
    description: "Беспроводная, подсветка, для Mac/Windows",
    image: "https://placehold.co/600x400/2563eb/white?text=Logitech+MX+Keys",
    category: "Аксессуары",
    inStock: true
  },
  {
    id: 7,
    name: "Мышь Razer DeathAdder V3",
    price: 6990,
    description: "Игровая, оптическая, 30000 DPI",
    image: "https://placehold.co/600x400/2563eb/white?text=Razer+DeathAdder",
    category: "Аксессуары",
    inStock: false
  },
  {
    id: 8,
    name: "Внешний SSD Samsung T7",
    price: 12990,
    description: "1TB, USB 3.2 Gen 2, до 1050MB/s",
    image: "https://placehold.co/600x400/2563eb/white?text=Samsung+T7",
    category: "Хранение данных",
    inStock: true
  },
  {
    id: 9,
    name: "Роутер TP-Link Archer AX73",
    price: 11990,
    description: "Wi-Fi 6, AX5400, 6 антенн",
    image: "https://placehold.co/600x400/2563eb/white?text=TP-Link+Archer",
    category: "Сетевое оборудование",
    inStock: true
  },
  {
    id: 10,
    name: "Веб-камера Logitech StreamCam",
    price: 15990,
    description: "1080p 60fps, USB-C, автофокус",
    image: "https://placehold.co/600x400/2563eb/white?text=Logitech+StreamCam",
    category: "Аксессуары",
    inStock: true
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-10">
        <ProductList products={products} />
      </div>
    </main>
  );
}