import Navigation from "@/src/components/website/Navigation/Navigation"


const layout = ({children}:LayoutProps<"/">) => {
  return (
    
    <html lang="en">
    <body>
      <Navigation/>
      {children}

      <footer>footer</footer>
    </body>
    </html>
  )
}

export default layout