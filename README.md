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
<p>After launch, you need to run the migrations and some other tasks on initial setup</p>
<pre>
docker exec -it sample-api bash
python manage.py migrate #run the migrations
python manage.py collectstatic #Import css and other static files
python manage.py createsuperuser #Create a user to generate sample data
</pre>

<h2>VUE CLIENT</h2>
<p>Launch with NPM. Docker deployment is for a prod environment.</p>
<p>To launch development server:</p>
<pre>
cd VueComponent/interview-client
npm install -s
npm run serve
</pre>

<h2>REACT CLIENT</h2>
<p>Launch with NPM:</p>
<pre>
cd react-frontend
npm install -s
npm start
</pre>
