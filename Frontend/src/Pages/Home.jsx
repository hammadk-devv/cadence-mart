import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Category from "../components/Category.jsx";
import Filter from "../components/Filter.jsx";
import CardList from "../components/CardList.jsx";
import Hero from "../components/common/Hero";
import CategoryShowcase from "../components/common/CategoryShowcase";
import ProductShowcase from "../components/commerce/ProductShowcase";
import CampaignSection from "../components/commerce/Campaigns";
import TrustSection from "../components/commerce/TrustSection";
import BrandShowcase from "../components/commerce/BrandShowcase";
import NewsletterSection from "../components/commerce/Newsletter";

import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";

import { motion } from "framer-motion";
import { slideUpVariants } from "../styles/motion";

export default function Home() {
  const [category, setCategory] = useState("");
  const [sortItem, setSortItem] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideUpVariants}
      >
        <Hero
          onShopClick={() => {
            navigate("/shop");
          }}
          onLearnClick={() => {
            const catSection = document.getElementById("explore-categories-section");
            if (catSection) {
              catSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideUpVariants}
      >
        <CategoryShowcase />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideUpVariants}
      >
        <ProductShowcase />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideUpVariants}
      >
        <CampaignSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideUpVariants}
      >
        <TrustSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideUpVariants}
      >
        <BrandShowcase />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideUpVariants}
      >
        <NewsletterSection />
      </motion.div>

      <motion.div initial={false} animate="visible" variants={slideUpVariants}>
        <section className="w-full py-6 lg:py-8 bg-[var(--color-bg-primary)]">
          <Container size="xl">
            <div className="text-center max-w-xl mx-auto mb-5 flex flex-col gap-1.5">
              <Typography
                variant="h2"
                as="h2"
                className="font-extrabold text-2xl md:text-3xl text-[var(--color-text-primary)]"
              >
                Products For You
              </Typography>
              <Typography variant="body-sm" className="text-[var(--color-text-secondary)]">
                Personalized recommendations based on your browsing.
              </Typography>
            </div>

            <Category setCategory={setCategory} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start mt-4">
              <aside className="lg:col-span-1">
                <Filter setSortItem={setSortItem} />
              </aside>
              <main className="lg:col-span-3">
                <CardList category={category} sortItem={sortItem} />
              </main>
            </div>
          </Container>
        </section>
      </motion.div>
    </>
  );
}
