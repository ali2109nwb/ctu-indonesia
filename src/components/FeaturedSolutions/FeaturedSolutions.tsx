import styles from "../FeaturedSolutions/FeaturedSolution.module.css";

const FeaturedSolutions = () => {
  return (
    <section id="featured-solutions"
    className={styles.featuredSolutions}
    >
      <div className={styles.container}>
        {/* Judul */}
        <div className={styles.textSection}>
          <h2 className="text-3xl font-semibold text-gray-900">Featured Solutions</h2>
          <p className="text-gray-700 mt-2">
            Discover the emerging age of competency and talent via innovative methods.
          </p>
        </div>

        {/* Grid Card */}
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <h3 className="text-lg font-semibold">Consulting</h3>
            <p className="text-gray-600 mt-2">
              Our devices are engineered to withstand harsh environments, ensuring safety and performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <h3 className="text-lg font-semibold">Maintenance</h3>
            <p className="text-gray-600 mt-2">
              Monitor your team with real-time location tracking and centralized management tools.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <h3 className="text-lg font-semibold">Design</h3>
            <p className="text-gray-600 mt-2">
              Experience swift and efficient communication with extensive network coverage and reliability.
            </p>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <h3 className="text-lg font-semibold">Design</h3>
            <p className="text-gray-600 mt-2">
              Experience swift and efficient communication with extensive network coverage and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions
