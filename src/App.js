import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./App.css";
import Main from "./components/main";
import RightSection from "./components/rightSection";
import CenterSection from "./components/centerSection";
import LeftSection from "./components/leftSection";
import { useEffect, useState } from "react";

const getLocalStorage = () => {
  let data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

function App() {
  const [dataState, setDataState] = useState(getLocalStorage());
  const [arrayHolder, setArrayHolder] = useState([]);
  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [editState, setEditState] = useState(false);
  const [editIdState, setEditIdState] = useState(null);

  //*************************************************** */
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "todo-light";
  });

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "todo-light" ? "todo-dark" : "todo-light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);
  //*************************************************** */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleState) {
      alert("لطفا عنوان و توضیحات را بنویسید!");
    } else if (titleState && editState) {
      setDataState(
        dataState.map((item) => {
          if (item.id === editIdState) {
            return {
              ...item,
              title: titleState,
              description: descriptionState,
            };
          }
          return item;
        })
      );
      setTitleState("");
      setDescriptionState("");
      setEditIdState(null);
      setEditState(false);
      alert("ویرایش شد!");
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: titleState,
        description: descriptionState,
        done: true,
      };
      setDataState([...dataState, newItem]);
      setTitleState("");
      setDescriptionState("");
    }
  };

  const searchFilterFunction = (event) => {
    const value = event.target.value.toUpperCase();
    const filtered = arrayHolder.filter(
      (user) =>
        user.title.toUpperCase().includes(value) +
        user.description.toUpperCase().includes(value)
    );
    setDataState(filtered);
  };

  const removeItem = (id) => {
    window.confirm("هشدار !\nاین آیتم حذف می‌شود.") &&
      setDataState(dataState.filter((item) => item.id !== id));
  };

  const removeEndTasks = () => {
    window.confirm("هشدار !\nهمه انجام شده‌ها حذف می‌شود.") &&
      setDataState(dataState.filter((item) => item.done === true));
  };

  const editItem = (id) => {
    const specificItem = dataState.find((item) => item.id === id);
    setEditState(true);
    setEditIdState(id);
    setTitleState(specificItem.title);
    setDescriptionState(specificItem.description);
  };

  const toggleTask = (task) => {
    setDataState(
      dataState.map((t) => (t.id === task ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(dataState));
  }, [dataState]);

  useEffect(() => {
    setArrayHolder(dataState);
  }, []);

  return (
    <div className={`${theme} todo-bg`}>
      <Main>
        <RightSection
          handleSubmit={handleSubmit}
          titleState={titleState}
          descriptionState={descriptionState}
          setTitleState={setTitleState}
          setDescriptionState={setDescriptionState}
          editState={editState}
          setDataState={setDataState}
          removeEndTasks={removeEndTasks}
          theme={theme}
        />
        <CenterSection
          dataState={dataState}
          removeItem={removeItem}
          editItem={editItem}
          searchFilterFunction={searchFilterFunction}
          toggleTask={toggleTask}
          setArrayHolder={setArrayHolder}
        />
        <LeftSection
          dataState={dataState}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      </Main>
    </div>
  );
}

export default App;
