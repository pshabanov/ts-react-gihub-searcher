import styles from './Container.module.scss';
import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({children }: ContainerProps) => (
  <div className={styles.container} >
      {children}
  </div>
);
