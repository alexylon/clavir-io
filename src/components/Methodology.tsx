import styles from "./Methodology.module.css";

export default function Methodology() {
  return (
    <section id="methodology" className={styles.section}>
      <div className="container">
        <h2 className="section-heading">Methodology</h2>
        <div className={styles.content}>
          <p>
            <a
              href="https://www.crumplab.com/publications/Crump/files/3900/Liu%20et%20al.%20-%202010%20-%20Do%20you%20know%20where%20your%20fingers%20have%20been%20Explicit.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Research on typing skill
            </a>{" "}
            suggests that skilled typing relies more on <strong>implicit procedural
            control</strong> than on <strong>explicit knowledge</strong> of key
            locations. The paper also suggests that the keyboard is represented in
            terms of its <strong>row-and-column structure</strong>, not as a
            memorized list of individual letters.
          </p>
          <p>
            Clavirio follows that idea by teaching the keyboard <strong>row by
            row</strong> with the same 7-lesson progression for each row:
          </p>
          <p className={styles.progression}>
            index pair → middle pair → ring pair → pinky pair → reach pair → full row → row + Shift
          </p>
          <p>
            This is meant to reduce reliance on <strong>explicit recall</strong> of key locations and build more <strong>automatic control</strong> within the keyboard’s <strong>row-and-column structure</strong>.
          </p>
          <p>
            Each lesson introduces only 2 new keys and uses only characters from
            earlier lessons. The same progression is used for <strong>QWERTY,
            Dvorak, and Colemak</strong>, so the lesson structure stays consistent
            across layouts.
          </p>
        </div>
      </div>
    </section>
  );
}
