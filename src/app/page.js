
"use client";
import Banner from "@/components/Home/Banner";
import FriendCard from "@/components/Home/FriendCard";
import SummaryCards from "@/components/Home/SummaryCards";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import initialFriendsData from '@/data/friends.json';
import { useEffect, useState } from "react";

export default function Home() {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadFriends = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setFriends(initialFriendsData);
            } catch (error) {
                console.error("Failed to load friends:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadFriends();
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <main className="min-h-screen bg-white pb-20 animate-in fade-in duration-700">
            <Banner />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-mt-8 relative z-10"> 
                    <SummaryCards friends={friends} />
                </div>

                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">
                        Your Friends
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {friends.map((friend) => (
                            <FriendCard key={friend.id} friend={friend} />
                        ))}
                    </div>
                    {friends.length === 0 && (
                        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                            <p className="text-slate-400 font-medium">
                                No friends found. Time to make some connections!
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
