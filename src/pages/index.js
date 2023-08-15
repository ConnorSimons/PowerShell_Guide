import * as React from "react"
import * as styles from "./styles.module.css"

export default function Home() {
  return (
    <div>
      <header>
        <h1>My PowerShell Learning Journey</h1>
      </header>
      <section id="about-me">
        <h2>About Me</h2>
        <p>
          Hello, I am Connor Simons. When I'm not diving into the world of PowerShell, you'll often find me immersed in the world of games, both on-screen and with my trusty RC cars. I also have a deep appreciation for the great outdoors, and you can often catch me exploring the breathtaking landscapes of the Pacific Northwest through hiking.
        </p>
      </section>
      <section id="overview">
  <h2>Overview</h2>
  <p>
    Welcome to my PowerShell learning journey! In this blog, I'll share my experiences and insights as I delve into the world of PowerShell scripting.

  </p>
  <p>
    We'll cover key topics including:
  </p>
  <ul>
    <li>
      <strong>PowerShell Help System:</strong> Mastering the built-in help system to quickly access documentation and learn about cmdlets and their usage.
    </li>
    <li>
      <strong>Functions:</strong> Creating and utilizing functions to modularize your code, enhance reusability, and streamline your PowerShell scripts.
    </li>
    <li>
      <strong>PowerShell Remoting:</strong> Harnessing the power of remoting to manage and control remote machines, execute commands, and retrieve information.
    </li>
  </ul>
  <p>
    Whether you're a beginner or an experienced IT professional, this blog will guide you through essential PowerShell concepts and techniques. Let's dive in and discover the capabilities of PowerShell together!
  </p>
</section>
<section id="help-system">
  <h2>Exploring the Help System</h2>
  <p>
    One of the essential aspects of PowerShell is its extensive help system,
    which provides detailed information about commands and concepts.
    Let's dive into some basics of using the help system.
  </p>
  <h3>Getting Help</h3>
  <p>
    To get help for a specific command, you can use the <code>Get-Help</code> cmdlet.
    For example, to get help for the <code>Get-Process</code> cmdlet, you can use:
  </p>
  <pre className={styles.codeSnippet}>
    <code>
      {`Get-Help Get-Process`}
    </code>
  </pre>
  <p>
    This command will display information about the <code>Get-Process</code> cmdlet,
    including its syntax, parameters, examples, and related help topics.
  </p>

  <h3>Understanding Help Output</h3>
  <p>
    The output from the <code>Get-Help</code> command provides valuable information
    to understand how to use a cmdlet effectively. Here's what you can expect to find:
  </p>
  <ul>
    <li>
      <strong>Syntax:</strong> The command's usage syntax, including parameters and options.
    </li>
    <li>
      <strong>Parameters:</strong> Detailed descriptions of each parameter and its purpose.
    </li>
    <li>
      <strong>Examples:</strong> Real-world usage examples to illustrate how the cmdlet works.
    </li>
    <li>
      <strong>Related Links:</strong> Links to additional help topics, related cmdlets, and concepts.
    </li>
  </ul>

  <h3>Searching for Cmdlets</h3>
  <p>
    If you're not sure about the exact name of a cmdlet, you can use wildcards in the search.
    For example, to search for cmdlets related to scheduling, you can use:
  </p>
  <pre className={styles.codeSnippet}>
    <code>
      {`Get-Help *schedule*`}
    </code>
  </pre>
  <p>
    This command will return a list of cmdlets with names or descriptions that contain the word "schedule."
    You can then review the list and use the descriptions to identify the cmdlet that suits your needs.
  </p>
  <h3>Wrap-Up</h3>
  <p>
    Congratulations! You've explored the fundamentals of the PowerShell Help System.
    You've learned how to use the <code>Get-Help</code> cmdlet to access detailed information
    about cmdlets, parameters, syntax, and examples.
  </p>
  <p>
    Remember that the help system is your go-to resource for understanding PowerShell commands
    and improving your scripting skills. As you continue your PowerShell journey, feel free to
    explore more advanced features of the help system, such as searching for concepts and
    understanding common parameter patterns.
  </p>
  <p>
    In the next section, we'll dive into the world of Functions and how they can enhance the
    modularity and reusability of your PowerShell scripts. Get ready to level up your scripting game!
  </p>
</section>
<section id="functions">
  <h2>Mastering Functions</h2>
  <p>
    Functions are like mini-programs within PowerShell that allow you to create reusable blocks of code.
    They're like building blocks that you can use over and over again in your scripts.
    Let's explore how functions work by looking at their structure and how you can use them.
  </p>
  <h3>Syntax of a Function</h3>
  <p>
    A function is defined using a specific pattern. Here's what each part does:
  </p>
  <pre className={styles.codeSnippet}>
    <code>
      {`
      function FunctionName {
        param (
          [DataType] $ParameterName1,
          [DataType] $ParameterName2
          # ... additional parameters
        )
  
        # Function body
        # ... code here
      }
      `}
    </code>
  </pre>
  <ul>
    <li>
      <code>function FunctionName</code>: This is where you give your function a name that describes what it does.
    </li>
    <li>
      <code>param</code> block: This is where you list the inputs your function needs, like numbers or text.
      It's like telling the function what information it will work with.
    </li>
    <li>
      Function body: This is where you write the actual instructions for what you want the function to do.
    </li>
  </ul>
  <h3>Creating Your Own Function</h3>
  <p>
    Let's create a simple function together that adds two numbers. Here's a detailed explanation of each step:
  </p>
  <pre className={styles.codeSnippet}>
    <code>
      {`
      function Add-Numbers {
        param (
          [int] $a,
          [int] $b
        )
  
        return $a + $b
      }
  
      $result = Add-Numbers -a 5 -b 7
      Write-Host "Sum: $result"
      `}
    </code>
  </pre>
  <ol>
    <li>
      <code>function Add-Numbers</code>: We're creating a new function called <code>Add-Numbers</code>.
    </li>
    <li>
      <code>param</code> block: We're telling the function that it will work with two numbers, <code>$a</code> and <code>$b</code>.
    </li>
    <li>
      Function body: We're using the <code>return</code> keyword to say, "Take these two numbers, add them up, and give me the result."
    </li>
    <li>
      <code>$result = Add-Numbers -a 5 -b 7</code>: We're telling the function to use <code>a=5</code> and <code>b=7</code>,
      and we're saving the result in a variable called <code>$result</code>.
    </li>
    <li>
      <code>Write-Host "Sum: $result"</code>: We're displaying the result using the <code>Write-Host</code> command.
    </li>
  </ol>
  <h3>Customizing Functions for Different Situations</h3>
  <p>
    Functions can be even more powerful when you customize them for different tasks.
    Let's create a function that greets people, with options for different greetings.
    Here's a step-by-step breakdown:
  </p>
  <pre className={styles.codeSnippet}>
    <code>
      {`
      function Get-Greeting {
        param (
          [string] $Name,
          [string] $GreetingMessage = "Hello"
        )
  
        return "$GreetingMessage, $Name!"
      }
  
      $message = Get-Greeting -Name "Connor" -GreetingMessage "Hi"
      Write-Host $message
      `}
    </code>
  </pre>
  <ol>
    <li>
      <code>function Get-Greeting</code>: We're creating a function called <code>Get-Greeting</code>.
    </li>
    <li>
      <code>param</code> block: We're telling the function to expect a person's name (<code>$Name</code>)
      and an optional greeting message (<code>$GreetingMessage</code>).
    </li>
    <li>
      Function body: We're using the <code>return</code> keyword to put together the greeting message using the name and optional message.
    </li>
    <li>
      <code>$message = Get-Greeting -Name "Connor" -GreetingMessage "Hi"</code>: We're using the function to create a personalized message,
      saying "Hi, Connor!" and saving it in the <code>$message</code> variable.
    </li>
    <li>
      <code>Write-Host $message</code>: We're displaying the customized greeting using <code>Write-Host</code>.
    </li>
  </ol>
  <p>
    Functions are like tools in your scripting toolbox.
    You can create functions for common tasks and then reuse them whenever you need.
    In the next section, we'll dive into another exciting concept: PowerShell Remoting.
  </p>
</section>
<section id="powershell-remoting">
  <h2>PowerShell Remoting</h2>
  <p>
    PowerShell Remoting is a powerful feature that allows you to execute commands on remote computers.
    It's like having the ability to control other machines from the comfort of your own computer.
    Let's explore how PowerShell Remoting works and how you can use it.
  </p>
  <h3>Enabling PowerShell Remoting</h3>
  <p>
    Before you can use PowerShell Remoting, you need to enable it on both the local and remote computers.
    You can do this by running the following commands in a PowerShell session with administrative privileges:
  </p>
  <pre className={styles.codeSnippet}>
    <code>
      {`
      # On the local computer
      Enable-PSRemoting -Force
      
      # On the remote computer
      Enable-PSRemoting -Force
      `}
    </code>
  </pre>
  <p>
    Enabling PowerShell Remoting allows you to communicate with remote computers securely.
  </p>
  <h3>Executing Commands Remotely</h3>
  <p>
    Once PowerShell Remoting is enabled, you can execute commands on remote computers using the <code>Invoke-Command</code> cmdlet.
    Here's an example of how you can use it:
  </p>
  <pre className={styles.codeSnippet}>
    <code>
      {`
      Invoke-Command -ComputerName RemoteComputer -ScriptBlock {
        Get-Process
      }
      `}
    </code>
  </pre>
  <p>
    In this example, the <code>-ComputerName</code> parameter specifies the name of the remote computer,
    and the <code>-ScriptBlock</code> parameter contains the command you want to execute remotely.
  </p>
  <h3>Using Remote Sessions</h3>
  <p>
    You can also create persistent remote sessions using the <code>New-PSSession</code> cmdlet.
    A remote session allows you to interact with a remote computer over time without re-establishing the connection.
  </p>
  <pre className={styles.codeSnippet}>
    <code>
      {`
      $session = New-PSSession -ComputerName RemoteComputer
      
      Invoke-Command -Session $session -ScriptBlock {
        # Commands to execute on the remote computer
      }
      
      Remove-PSSession -Session $session
      `}
    </code>
  </pre>
  <p>
    In this example, a remote session is created using <code>New-PSSession</code>,
    and you can interact with the remote computer using the <code>-Session</code> parameter of <code>Invoke-Command</code>.
    Don't forget to clean up by removing the session when you're done using <code>Remove-PSSession</code>.
  </p>
  <h3>Security Considerations</h3>
  <p>
    While PowerShell Remoting is a powerful tool, it's important to consider security.
    Remoting is disabled by default for security reasons, and enabling it should be done with caution.
    Always ensure that you're using secure and trusted methods when executing commands on remote computers.
  </p>
  <p>
    With PowerShell Remoting, you have the ability to manage and control remote machines seamlessly.
    It's a valuable tool for IT professionals and system administrators to efficiently manage their infrastructure.
  </p>
  <h3>Conclusion</h3>
  <p>
    Congratulations! You've now covered the fundamentals of PowerShell, functions, and PowerShell Remoting.
    These concepts are just the beginning of your journey into PowerShell scripting.
    With the knowledge you've gained, you can start creating more complex scripts and automating various tasks.
    Keep exploring and experimenting, and don't hesitate to dive deeper into PowerShell's extensive capabilities.
    Happy scripting!
  </p>
</section>
    </div>
  )
}
