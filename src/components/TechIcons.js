import React, { useState, useEffect } from 'react';
import { SiPostman, SiMysql, SiFigma, SiCanva, SiTailwindcss, SiGraphql } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaLaravel, FaWordpress, FaPhp } from 'react-icons/fa';
import './TechIcons.css';

const icons = [
    { component: <FaReact />, name: 'react' },
    { component: <FaHtml5 />, name: 'html' },
    { component: <FaCss3Alt />, name: 'css' },
    { component: <FaBootstrap />, name: 'bootstrap' },
    { component: <FaJs />, name: 'js' },
    { component: <FaLaravel />, name: 'laravel' },
    { component: <SiPostman />, name: 'postman' },
    { component: <FaPhp />, name: 'php' },
    { component: <FaWordpress />, name: 'wordpress' },
    { component: <SiMysql />, name: 'mysql' },
    { component: <SiFigma />, name: 'figma' },
    { component: <SiCanva />, name: 'canva' },
    { component: <SiTailwindcss />, name: 'tailwind' },
    { component: <SiGraphql />, name: 'yed' },
];


const TechIcons = ({ className = '' }) => {
    const [iconPositions, setIconPositions] = useState(
        icons.map(icon => ({
            x: Math.random() * 80 + 10, // 10vw - 90vw
            y: Math.random() * 70 + 10, // 10vh - 80vh
            vx: Math.random() * 1 - 0.5,
            vy: Math.random() * 1 - 0.5,
                }))
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIconPositions(iconPositions.map((pos, index) => {
                let newX = pos.x + pos.vx;
                let newY = pos.y + pos.vy;

                // Bounce off edges
                if (newX < 10 || newX > 90) pos.vx *= -1;
                if (newY < 10 || newY > 80) pos.vy *= -1;

                return { ...pos, x: newX, y: newY };
            }));
        }, 16); // 16ms = 60fps

        return () => clearInterval(intervalId);
    }, [iconPositions]);

    return (
        <div className={`tech-icons-bg-static ${className}`}>
            {icons.map((icon, index) => (
                <span
                    key={icon.name}
                    className={`tech-icon ${icon.name}`}
                    style={{
                        left: `${iconPositions[index].x}vw`,
                        top: `${iconPositions[index].y}vh`,
                    }}
                >
                    {icon.component}
                </span>
            ))}
        </div>
    );
};

export default TechIcons;
