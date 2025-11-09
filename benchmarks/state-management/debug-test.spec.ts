// Simple test to debug comprehensive v2 store issues
import { describe, it, expect } from 'vitest';

describe('Debug Comprehensive v2', () => {
  it('should import comprehensive v2 store', async () => {
    try {
      const stores = await import('./src/stores');
      console.log('Imported stores:', Object.keys(stores));
      expect(stores.reduxActionsV2).toBeDefined();
      expect(typeof stores.reduxActionsV2.createStore).toBe('function');
    } catch (error) {
      console.error('Import error:', error);
      throw error;
    }
  });

  it('should create a Redux store', async () => {
    const { reduxActionsV2 } = await import('./src/stores');
    try {
      const store = reduxActionsV2.createStore();
      console.log('Store created:', typeof store);
      expect(store).toBeDefined();
    } catch (error) {
      console.error('Store creation error:', error);
      throw error;
    }
  });

  it('should run increment operation', async () => {
    const { reduxActionsV2 } = await import('./src/stores');
    try {
      const result = reduxActionsV2.increment();
      console.log('Increment result:', result);
      expect(typeof result).toBe('number');
    } catch (error) {
      console.error('Increment error:', error);
      throw error;
    }
  });
});