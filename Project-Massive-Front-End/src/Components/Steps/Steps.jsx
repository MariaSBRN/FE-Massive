import React from "react";
import styles from "./Steps.module.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import sprayer from "../../assets/stepimage.png";

function Steps() {
  const steps = [
    {
      icon: icon1,
      title: "Pilih menu alat tani",
      description: "Memilih menu alat tani yang berada di header",
    },
    {
      icon: icon2,
      title: "Pilih produk",
      description: "Pilih banyaknya produk yang ingin dipinjam",
    },
  ];
  const steps1 = [
    {
      icon: icon3,
      title: "Isi data peminjaman",
      description: "Berupa banyak produk, tanggal peminjaman dan pengembalian",
    },
    {
      icon: icon4,
      title: "Menunggu konfirmasi",
      description:
        "Menunggu konfirmasi dari admin mengenai produk yang dipinjam",
    },
  ];

  return (
    <section className={styles.rentalSteps}>
      <h2 className={styles.stepsTitle}>Bagaimana cara meminjam?</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.stepsContent}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <img src={step.icon} alt="" className={styles.stepIcon} />
              <div className={styles.stepInfo}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <img
          src={sprayer}
          alt="Rental process illustration"
          className={styles.stepsImage}
        />
        <div className={styles.stepsContent}>
          {steps1.map((step, index) => (
            <div key={index} className={styles.step}>
              <img src={step.icon} alt="" className={styles.stepIcon} />
              <div className={styles.stepInfo}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
