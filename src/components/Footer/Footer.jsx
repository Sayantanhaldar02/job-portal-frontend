import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-muted flex flex-col justify-between bg-newsletter-pattern bg-no-repeat bg-cover pt-10 ">
                <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <div className="flex flex-col gap-4">
                        <Link href="#" className="flex items-center gap-2" prefetch={false}>
                            <span className="text-lg font-semibold">Job.com</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Job.com is a leading provider of innovative solutions for businesses of all sizes.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-lg font-semibold ">Quick Links</h4>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Home
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            About
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Services
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Contact
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-lg font-semibold ">Resources</h4>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Blog
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Documentation
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Support
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            FAQ
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-lg font-semibold ">Legal</h4>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Cookie Policy
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-lg font-semibold ">Connect</h4>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Twitter
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            LinkedIn
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Instagram
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            GitHub
                        </Link>
                    </div>
                </div>
                <div className="container mt-8 py-8 text-center gap-4">
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer