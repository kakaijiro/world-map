/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";
import { flagemojiToPNG } from "../utils/helper";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { emoji, cityName, date, id, position } = city;

  const hundleClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity?.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        {/* <Link
        className={`${styles.cityItem}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      > */}
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={hundleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
