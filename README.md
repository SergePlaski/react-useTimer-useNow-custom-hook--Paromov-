# An Alternative Implementation of a Timer Component

The advantage of using this approach is more declarative code 
that is much closer to the original React architectural philosophy 
than the traditional implementation with useEffect();

In addition, it is easier to change the timer settings, 
such as enabled/disabled and refresh interval (time unit scale).

Note: for use with SSR, we might need to supply the local client timestamp 
to the server as server time may differ from the client.
