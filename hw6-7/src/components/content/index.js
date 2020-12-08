import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemLessonNum,
} from './styled';
import lesson8 from '../../data/lesson8.json';
import lesson9 from '../../data/lesson9.json';
import lessonsTasks from '../lessons';

const lessons = [lesson8 , lesson9];

const renderTopics = (topics, lessonName) => {
  return (
    <ul>
      {topics.map(({ name: topicName, title, tasks }) => (
        <li key={topicName}>
          <h2>{title}</h2>
          <ul>
            {tasks.map((task, index) => {
              const path = getTaskPath(lessonName, topicName, index);
              const Component = getTaskComponent(lessonName, topicName, index);
              if (!Component) return null;

              const descriptionPath = getTaskDescriptionPath(
                lessonName,
                topicName,
                index
              );
              const Description = getDescriptionComponent(
                lessonName,
                topicName,
                index
              );

              return (
                <li key={index}>
                  <Link to={path}>{task.name}</Link>
                  &nbsp;
                  {Description && (
                    <Link to={descriptionPath}>(description)</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const Content = ({ preExpandedLessons = ['8'], setExpandedLessons }) => {
  return (
    <Accordion
      preExpanded={preExpandedLessons}
      allowZeroExpanded={true}
      onChange={setExpandedLessons}
    >
      {lessons.map((lesson) => (
        <AccordionItem key={lesson.name} uuid={lesson.name}>
          <AccordionItemHeading>
            <AccordionItemButton disabled={true}>
              <h1>
                {lesson.title}
                <AccordionItemLessonNum>
                  lesson {lesson.name}
                </AccordionItemLessonNum>
              </h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {renderTopics(lesson.topics, lesson.name)}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

Content.propTypes = {
  preExpandedLessons: PropTypes.arrayOf(PropTypes.string),
  setExpandedLessons: PropTypes.func.isRequired,
};

export default Content;

export const renderRoutes = () => {
  const routes = [];
  lessons.forEach((lesson) => {
    const { name: lessonName, topics } = lesson;
    topics.forEach((topic) => {
      const { name: topicName, tasks } = topic;
      tasks.forEach((task, index) => {
        const path = getTaskPath(lessonName, topicName, index);
        const Component = getTaskComponent(lessonName, topicName, index);

        const descriptionPath = getTaskDescriptionPath(
          lessonName,
          topicName,
          index
        );
        const Description = getDescriptionComponent(
          lessonName,
          topicName,
          index
        );

        if (Component) {
          routes.push(
            <Route key={topicName + index} path={path} component={Component} />
          );
          if (Description) {
            routes.push(
              <Route
                key={topicName + index + 'description'}
                exact
                path={descriptionPath}
                component={Description}
              />
            );
          }
        }
      });
    });
  });
  return routes;
};

function getTaskPath(lessonName, topicName, taskNum) {
  return `/lesson${lessonName}/${topicName}/task${taskNum + 1}`;
}

function getTaskDescriptionPath(lessonName, topicName, taskNum) {
  return `/lesson${lessonName}/${topicName}/description${taskNum + 1}`;
}

function getTaskComponent(lessonName, topicName, taskNum) {
  const lessonTasks = lessonsTasks[lessonName];
  if (!lessonTasks || !lessonTasks[topicName]) return null;
  const Component =
    lessonTasks[topicName][taskNum] && lessonTasks[topicName][taskNum].task;
  return Component ? Component : null;
}

function getDescriptionComponent(lessonName, topicName, taskNum) {
  const lessonTasks = lessonsTasks[lessonName];
  if (!lessonTasks || !lessonTasks[topicName]) return null;
  const Component =
    lessonTasks[topicName][taskNum] &&
    lessonTasks[topicName][taskNum].description;
  return Component ? Component : null;
}
