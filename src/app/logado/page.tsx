import React from 'react';
import Image from "next/image";
import detailImg2 from '@/app/assets/detail2.png';
import LogoutButton from "@/app/components/logout-button";
import Link from "next/link";
import {FaArrowCircleRight} from "react-icons/fa";

const Page = () => {
    return (
        <main className="md:px-28 py-10 px-8 relative min-h-screen container mx-auto">
            <Image
                src={detailImg2}
                alt="Imagem detalhe de fundo"
                className="absolute invisible xl:visible right-20 bottom-20"
            />
            <header className="text-center py-12 md:pb-24">
                <Image
                    src={'https://i.pravatar.cc/100'}
                    alt="Imagem Avatar"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                />
                <h1 className="md:text-6xl text-4xl mt-6">
                    Boas vindas, <span className="font-bold">{'Roberto'}</span>
                </h1>
                <h3 className="md:text-3xl text-lg font-extralight mt-6 text-neutral-600">
                    Que tal analisarmos seu GitHub?
                </h3>
            </header>
            <section className="max-w-xl mb-12">
                <hr/>
                <ItemButton URL={'https://github.com/Tiago-Silva?tab=repositories'}>Meus Repositórios ({'repoCount'})</ItemButton>
                <ItemButton URL={'https://github.com/Tiago-Silva?tab=repositories'}>Meus Gists ({'gistCount'})</ItemButton>
                <ItemButton URL={'https://github.com/Tiago-Silva?tab=repositories'}>
                    Meus Seguidores ({'followerCount'})
                </ItemButton>
            </section>
            <LogoutButton />
        </main>
    );
};

export default Page;

const ItemButton = ({
        children,
        URL,
    }: {
    children: React.ReactNode;
    URL: string;
}) => {
    return (
        <>
            <Link
                href={URL}
                className="flex items-center justify-between text-lg md:text-xl py-8 w-full"
            >
                {children}
                <FaArrowCircleRight className="-rotate-45 text-violet-500" />
            </Link>
            <hr />
        </>
    );
}
