import styles from "./styles/about.module.css";
import Button from "../reusables/Button";
import { images } from "../exports/images";

const About = () => {
    return (
        <section>
            <div className="row">
                <article className={`col-12 col-md-7 ${styles.aboutText}`}>
                    <div className={styles.divider} >
                        <hr className="" />
                        <span className="divider-text"><span className="txt-primary">About</span> DesignHub</span>
                        <hr className="" />
                    </div>
                    <h2 className={styles.introduction}>
                        Introduction To The Best&nbsp;
                        <span className="txt-primary">Digital Agency</span>
                    </h2>
                    <p className="py-4">Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu enim id gravida pulvinar. Tristique consectetur mi curabitur congue enim dignissim amet justo. Porta morbi nulla aliquet adipiscing. Sed diam mauris erat faucibus eu posuere ultricies quisque amet. Quam pellentesque in tristique
                        <br />
                        <br />
                        sed neque scelerisque quam pulvinar. Risus dictum elementum lacus urna. Neque eget sagittis vulputate nam id morbi id. Aliquam molestie posuere pulvinar arcu
                    </p>

                    <Button className="bcg-primary hero-btn" text="Hire Us" />

                </article>

                <article className="col-12 col-md-5">
                    <img src={images.GraphicDesigner} alt="Graphic Designer" className="img-fluid" />
                    <img src={images.AboutImage2} alt="Three People Staring At Screen" className={`img-fluid ${styles.aboutImage2}`} />
                </article>

            </div>
        </section>
    )
}

export default About