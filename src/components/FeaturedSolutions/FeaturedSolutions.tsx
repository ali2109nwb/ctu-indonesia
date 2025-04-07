import styles from "../FeaturedSolutions/FeaturedSolution.module.css";

const FeaturedSolutions = () => {
  return (
    <section id="featured-solutions" className={styles.featuredSolutions}>
      <div className={styles.container}>
        {/* Judul */}
        <div className={styles.textSection}>
          <h2 className="md:pl-0 pl-8 text-xl sm:text-2xl md:text-3xl text-left leading-tight sm:leading-normal font-semibold text-gray-900">Featured Solutions</h2>
          <p className="text-gray-700 mt-2 md:pl-0 pl-8">
            Discover the emerging age of competency and talent via innovative methods.
          </p>
        </div>

        {/* Grid Card */}
        <div className={`${styles.grid}`}>
          {/* Card 1 */}
          <div className={`${styles.card}`}>
            <img src="/assets/icons/consulting.png" alt="Consulting Icon" className={styles.icon} />
            <h3 className="text-lg font-semibold">Consulting</h3>
            <p className="text-gray-600 mt-2">
              Our devices are engineered to withstand harsh environments, ensuring safety and performance.
            </p>
            <div className={styles.blueLine}></div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <img src="/assets/icons/maintenance.png" alt="Maintenance Icon" className={styles.icon} />
            <h3 className="text-lg font-semibold">Maintenance</h3>
            <p className="text-gray-600 mt-2">
              Monitor your team with real-time location tracking and centralized management tools.
            </p>
            <div className={styles.blueLine}></div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <img src="/assets/icons/design.png" alt="Design Icon" className={styles.icon} />
            <h3 className="text-lg font-semibold">Design</h3>
            <p className="text-gray-600 mt-2">
              Experience swift and efficient communication with extensive network coverage and reliability.
            </p>
            <div className={styles.blueLine}></div>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <img src="/assets/icons/integration.png" alt="Integration Icon" className={styles.icon} />
            <h3 className="text-lg font-semibold">Integration</h3>
            <p className="text-gray-600 mt-2">
              Easily integrate our rugged devices into your digital infrastructure for enhanced productivity.
            </p>
            <div className={styles.blueLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
