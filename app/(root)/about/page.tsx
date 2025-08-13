import React from "react";

export default function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-3xl font-bold text-center leading-none tracking-wide sm:text-6xl">
        We Love
        <span className="bg-blue-500 px-4 py-2 rounded-lg tracking-widest text-white">
          Store
        </span>
      </h1>
      <p className="text-muted-foreground text-lg tracking-wide leading-8 mx-auto pt-6 text-center max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus
        illum sunt ipsum culpa consequatur voluptate commodi nulla quasi. Vitae
        dolore laudantium magnam eos corporis iste fugit, adipisci illum
        repellat?
      </p>
    </section>
  );
}
