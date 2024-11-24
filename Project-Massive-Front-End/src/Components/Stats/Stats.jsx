import React from "react";
import StatsCard from "../StatsCard/StatsCard";
import IconTractor from "../../assets/IconTractor.svg";
import IconHand from "../../assets/IconHand.svg";
import IconBibit from "../../assets/IconBibit.svg";
import IconArrow from "../../assets/IconArrow.svg";

const Stats = () => {
  const products = [
    {
      arrowSrc: IconArrow,
    },
    // Add more products here if needed
  ];

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <section>
            {products.map((product, index) => (
              <StatsCard
                key={index}
                iconSrc={IconTractor}
                title="Proyek Tani"
                description="Meningkatkan hasil pertanian melalui penerapan teknik pertanian modern dan ramah lingkungan."
                arrowSrc={product.arrowSrc}
              />
            ))}
          </section>
        </div>
        <div class="col">
          <section>
            {products.map((product, index) => (
              <StatsCard
                key={index}
                iconSrc={IconHand}
                title="Peminjaman Alat Tani"
                description="Mendukung petani dalam mengakses alat pertanian yang berkualitas,"
                arrowSrc={product.arrowSrc}
              />
            ))}
          </section>
        </div>
        <div class="col">
          <section>
            {products.map((product, index) => (
              <StatsCard
                key={index}
                iconSrc={IconBibit}
                title="Pupuk Subsidi"
                description="Menyediakan pupuk subsidi yang terjangkau bagi Kelompok Tani Dosroha untuk mendukung peningkatan hasil pertanian."
                arrowSrc={product.arrowSrc}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Stats;
