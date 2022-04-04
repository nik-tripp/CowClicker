<h1>INTRO:</h1>
This is my implementation of a simple CowClicker exercise

<h1>SETUP:</h1>
<h2>GENERAL</h2>
<p>docker-compose contains a DNS server that can be disabled and replaced with an update to local hosts file</p>
<p>If using the DNS server, you must set a zone for the API's hostname</p>

<h2>API</h2>
<p>Expects hostname to be "sample-api.com", can be changed by updating both of the following</p>
<ul>
<li>nginx.conf:40</li>
<li>djangoProject/mount/djangoProject/settings.py:28</li>
</ul>
<p>Launch using docker-compose up --build </p>

<h2>CLIENT</h2>
<p>Build/launch with NPM. Docker deployment is for a prod environment, to launch development server</p>
<pre>cd VueComponent/interview-client</pre>
<pre>npm install -s</pre>
<pre>npm run serve</pre>
