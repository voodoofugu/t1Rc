export default function PageCloseBtn({ onClick }) {
  return (
    <a
      className={`absolute left-50% -translate-x-50% bottom-30 w-40 h-40 cursor-pointer bg-indigo-200 dark:bg-indigo-900 rounded-3xl shadow-toTopBtn dark:shadow-darkThemeClearBtn active:scale-90 brightness-105 hover:brightness-110 transition-all1`}
      onClick={onClick}
      href="#"
    >
      <div className="absolute w-full h-full drop-shadow-dS1 dark:drop-shadow-darkDS1 before:absolute after:absolute before:transition-all1 after:transition-all1 before:rounded-30 after:rounded-30 after:-rotate-45 before:left-50% before:top-50% before:-translate-x-50% before:-translate-y-50% before:rotate-45 before:w-3 before:h-24 before:bg-indigo-400 hover:before:bg-red-500 after:left-50% after:top-50% after:-translate-x-50% after:-translate-y-50% after:w-3 after:h-24 after:bg-indigo-400 hover:after:bg-red-500"></div>
    </a>
  );
}
