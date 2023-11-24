import Newstell from "@/components/NewsLetter";
import Braner from "@/components/Braner";
import NewsArrival from "@/components/NewsArrival";
import Promos from "@/components/Promos";
import Tendances from "./products/Tendances";

export default function Home() {
  return (
    <main className="home">
      <section className="backgroundImg">
        <Braner />
      </section>
      <section className="zone-article">
        <NewsArrival />
      </section>
      <Promos />
      <Tendances />
      <Newstell />
    </main>
  );
}
