import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";
import ImageGallary from "@/app/components/ImagesGallary";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

async function getData(slug) {
  const query = `*[_type =="product" && slug.current =="${slug}"][0]
    {
      _id,
        image,
        price,
        name,
        price_id,
        decription,
        "slug": slug.current,
        "category":category->name
    }`;
  const data = await client.fetch(query);
  return data;
}
export const dynamic = "force-dynamic";
export default async function ProductPage({ params }) {
  const data = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:mb-6">
          <ImageGallary image={data.image} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500 ">
                {data.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className=" text-xl font-bold text-gray-800 md:text-2xl">
                  ₹{data.price}
                </span>
                <span className="mb-0.5 text-gray-600 line-through">
                  ₹{data.price + 200}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat Plus Shipping
              </span>
            </div>
            <div className="mb-4 flex items-center gap-2 text-gray-500">
              <Truck />
              <span className="text-sm ">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="INR"
                image={data.image[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="INR"
                image={data.image[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.decription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
