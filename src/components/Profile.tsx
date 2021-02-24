import styles from '../styles/components/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/felpshn.png" alt="Felipe Lara" />
      <div>
        <strong>Felipe Lara</strong>
        <p>
          <img src="icons/level.svg" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export { Profile };
