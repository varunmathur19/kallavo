    import Link from "next/link";
    import { ArrowLeft } from "lucide-react";
    import { notFound } from "next/navigation";
    import { products } from "../../data/products";
import Header from "../../../component/home/Header";
     import Footer from "../../../component/home/Footer";
    export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <>
        <Header/>
        <div className="min-h-screen bg-[#FBF8F3] text-[#2B2620]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-[35px] md:py-[70px]">
            <Link
            href="/product"
            className="inline-flex items-center gap-2 text-sm text-[#af89bc] hover:underline mb-8"
            >
            <ArrowLeft size={16} />
            Back to Collection
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7 lg:gap-12 gap-8">
            <div className="bg-white overflow-hidden">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-[320px] sm:h-[480px] md:h-[350px]  lg:h-[450px] xl:h-[550px] object-cover"
                />
            </div>

            <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[#af89bc] mb-2">
                {product.category}
                </p>

                <h1 className="font-serif text-3xl lg:text-4xl md:text-3xl text-[#1F3D2B]">
                {product.name}
                </h1>

                <div className="lg:mt-5 mt-1 flex items-center gap-3">
                <span className="text-2xl font-medium text-[#af89bc]">
                    ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                )}
                </div>

                <p className="lg:mt-6 mt-1 text-[#555] leading-relaxed ">
                {product.description}
                </p>

                <div className="lg:mt-8 mt-2 lg:space-y-3 space-y-2 text-sm border-t border-[#E5DFD3] lg:pt-6 pt-3">
                {product.fabric && (
                    <div className="flex">
                    <span className="w-28 text-gray-500">Fabric</span>
                    <span>{product.fabric}</span>
                    </div>
                )}
                {product.color && (
                    <div className="flex">
                    <span className="w-28 text-gray-500">Color</span>
                    <span>{product.color}</span>
                    </div>
                )}
                {product.occasion && (
                    <div className="flex">
                    <span className="w-28 text-gray-500">Occasion</span>
                    <span>{product.occasion}</span>
                    </div>
                )}
                {product.care && (
                    <div className="flex">
                    <span className="w-28 text-gray-500">Care</span>
                    <span>{product.care}</span>
                    </div>
                )}
                </div>

                <div className="lg:mt-10 mt-4 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-[#af89bc] text-white py-3.5 hover:bg-[#9a75a8] transition">
                    Add to Cart
                </button>
                <button className="flex-1 border border-[#af89bc] text-[#af89bc] py-3.5 hover:bg-[#af89bc] hover:text-white transition">
                    Buy Now
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
    }