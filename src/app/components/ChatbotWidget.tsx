'use client'

import { useEffect } from 'react'
import './ChatbotWidget.css'

export default function ChatbotWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widget.cxgenie.ai/widget.js'
    script.dataset.aid = '287eb8f6-842f-4065-a21f-2eef2bb888cf'
    script.dataset.lang = 'en'
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}

