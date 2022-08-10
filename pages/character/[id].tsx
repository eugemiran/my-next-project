import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'
import CharacterService from '../../services/CharacterService';

const Character: NextPage = () => {
    const router = useRouter();
    const [data, setData] = useState<any>();
    const { id } = router.query;

    const getCharacterRequest = async () => {
        console.log(id)
        const res = await CharacterService.getCharacter(id);
        setData(res.data);
    };

    useEffect(() => {
       if (id) getCharacterRequest();
    }, [id]);

    if (!data) return (<p>Loading ...</p>);
    console.log(data)
    return (
    <div>
        <div>
            <img src={data.image} /> 
            <h5 className={styles.names}>{data.name}</h5>
            <div>{data.species}</div>
            <div>{data.status}</div>
        </div>
    </div>
    );
};

export default Character;

