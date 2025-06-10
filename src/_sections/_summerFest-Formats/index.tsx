import React from 'react';
import styles from './styles.module.sass';
import { eventFormats } from './data';

const categoryClassMap: Record<string, string> = {
  Food: styles.food,
  Tech: styles.tech,
  'Extra Tech': styles.extraTech,
  Entertainment: styles.entertainment,
};

export default function SummerFestFormats() {
  const formats = eventFormats.map((format) => (
    <article key={format.category} className={`${styles.format} ${format.category === 'Tech Zone' ? styles.wide : ''}`}>
      <header className={styles.formatHeader}>
        <h2 className={`${styles.formatCategory} ${categoryClassMap[format.category] || ''}`}>
          {format.category}
        </h2>
        {format.isFoodIncluded && (
          <span className={styles.foodIncludedBadge}>Food Included</span>
        )}
      </header>
      {format.description && (
        <p className={styles.formatDescription}>{format.description}</p>
      )}
      <ul className={styles.activityList}>
        {format.activities.map((activity) => (
          <li key={activity.id} className={styles.activityItem}>
            <h3 className={styles.activityName}>{activity.name}</h3>
            <p className={styles.activityScene}>
              <strong>Scene:</strong> {activity.scene}
            </p>
            {activity.description && (
              <p className={styles.activityDescription}>{activity.description}</p>
            )}
            {activity.note && (
              <p className={styles.activityNote}>
                <em>{activity.note}</em>
              </p>
            )}
          </li>
        ))}
      </ul>
    </article>
  ));
  return (
    <section className={styles.container}>

      <h1 className={styles.title}>
        <div className={styles.cyberGrid}>
          ▶▶Event Formats Overview◢
        </div>
      </h1>
      <div className={styles.formatWrapper}>
        {formats}
      </div>
    </section>
  );
}
