import styleNav from '@/components/Navigation.module.css'
import Link from 'next/link';

export default function Navigation (){
    return (
        <ul className={styleNav.nav}>
            <li><Link href='javascript:;'></Link></li>
            <li><Link href='javascript:;'></Link></li>
            <li><Link href='javascript:;'></Link></li>
            <li><Link href='javascript:;'></Link></li>
            <li><Link href='javascript:;'></Link></li>
        </ul>
    );
}