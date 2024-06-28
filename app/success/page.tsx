'use client'

import { Button } from "@/components/ui/button"
import { CheckCircleIcon } from "lucide-react"
import { useRouter } from "next/navigation"

function SuccessPage() {
    const router = useRouter()

  return (
    <div className="h-screen">
        <main className="max-w-5xl mx-auto">
            <div className="flex flex-col p-10 bg-white">
                <div className="flex items-center space-x-2 mb-5">
                    <CheckCircleIcon className="text-green-500 h-10"/>
                    <h1 className="text-3xl">
                        Thank you, your order has been confirmed!
                    </h1>
                </div>
                <p>
                    Thank you for shopping with us. we will send a confirmation
                    once your item has been shipped. If you would like to check the status of
                    your order(s), please press the link below.
                </p>
                <Button 
                    onClick={() => router.push('/orders')} 
                    className="button mt-8">
                        Go to my orders
                </Button>
            </div>
        </main>
    </div>
  )
}

export default SuccessPage