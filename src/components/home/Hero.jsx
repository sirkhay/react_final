/** @format */

import styles from "./styles/hero.module.css";
import Button from "../reusables/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h6 className={styles.welcome}>Welcome To <span>DesignHub</span></h6>
        <h1 className={styles.creatingTheFuture}>Creating the Future with <span>DesignHub</span></h1>
        <p className="mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          quia. Reprehenderit debitis sunt suscipit facere quod asperiores
          perferendis fugiat culpa.
        </p>

        <Button className="bcg-primary hero-btn" text="Hire Us" /> &nbsp; &nbsp;
        <Button className="view-portfolio-btn hero-btn" text="View Portfolio" />
      </div>
    </section>
  );
}
